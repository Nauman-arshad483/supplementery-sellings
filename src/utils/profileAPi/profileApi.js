export const storePersonalInformationApi = async (personalInformation, endpoint) => {
  const response = await fetch(`http://localhost:5000/api/users/profile/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(personalInformation),
  })
  return response.json()
}
