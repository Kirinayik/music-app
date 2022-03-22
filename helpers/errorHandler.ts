export const errorHandler = (error:any) => {
  const status = error.status;

  switch (status) {
    case '404':
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        }
      }
    case '401':
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        }
      }
    default:
      return {
        redirect: {
          destination: '/500',
          permanent: false,
        }
      }
  }
}