export const login = async (email, password) => {
  const response = await fetch('http://localhost:5000/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({ email, password }),
  })
  return response.json()
}