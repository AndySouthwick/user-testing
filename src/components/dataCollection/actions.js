export const actionTypes = {
  SET_ID: '[ID] SET IT',
}

export function setTheSessionId(data) {
  return{
    type: actionTypes.SET_ID,
    payload:data
  }
}