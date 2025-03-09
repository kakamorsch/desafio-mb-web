export const handleCreateUser = async (data)=> {
    const response = await fetch(`http://localhost:5000/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar dados');
      }

      return await response.json();
}
