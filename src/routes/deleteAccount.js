const deleteAccount = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(`Deleting account with id: ${id}`);
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);

    console.log('Current accounts:', accounts);

    const updatedAccounts = accounts.filter(account => account.id !== id);
    
    console.log('Updated accounts:', updatedAccounts);

    if (accounts.length === updatedAccounts.length) {
      return res.status(404).json({ error: "Account not found" });
    }

    fs.writeFileSync(filePath, JSON.stringify(updatedAccounts, null, 2));
    console.log(`Account with id: ${id} deleted successfully`);
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error('Error deleting account:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
