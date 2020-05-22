export const loggIn = (loggedInUser) => {
  return{
    type: 'LOGG_IN',
    payload: loggedInUser
  }
}

export const loggOut = () => {
  return{
    type: 'LOGG_OUT'
  }
}





