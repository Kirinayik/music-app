import {Box, IconButton} from "@mui/material";
import {SearchBarContainer, SearchIconContainer, SearchInput} from "./SearchBar.styles";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {ChangeEvent, KeyboardEvent, useState} from "react";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../../store";
import {setSearch} from "../../../store/search/search";
import {setLoader} from "../../../store/loader/loader";
import {useRouter} from "next/router";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {searchQuery} = useAppSelector(state => state.search)
  const [input, setInput] = useState<string>(searchQuery)

  const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleClearInput = () => {
    setInput('')
  }

  const handleSearch = async () => {
    if (input.trim().length > 0) {
      await router.push('/search')
      dispatch(setLoader(true))

      try {
        const {data} = await axios.post(`http://localhost:3000/api/spotify/search`, {query: input})
        dispatch(setSearch({...data, searchQuery: input}))
        dispatch(setLoader(false))
      } catch (e) {
        dispatch(setLoader(false))
      }
    }
  }

  const handleKeyPress = (e:KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      handleSearch()
    }
  }

  return (
      <Box padding={{xs: '0 20px', tiny: '0 30px'}}>
        <SearchBarContainer>
          <SearchIconContainer position={'left'}>
            <IconButton onClick={handleSearch} disableRipple>
              <SearchIcon sx={{color: 'inherit'}}/>
            </IconButton>
          </SearchIconContainer>
          <SearchInput value={input} onChange={handleInput} onKeyPress={handleKeyPress}/>
          {input.length > 0 && (
            <SearchIconContainer position={'right'}>
              <IconButton onClick={handleClearInput} disableRipple>
                <CloseIcon sx={{color: 'inherit'}}/>
              </IconButton>
            </SearchIconContainer>
          )}
        </SearchBarContainer>
      </Box>
  );
};

export default SearchBar;