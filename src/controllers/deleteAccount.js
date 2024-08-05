const deleteAccount = async (req, res) => {
    try {
      const { title, amount } = req.body;
      console.log(`Deleting account with title: ${title} and amount: ${amount}`);
      const filePath = path.join(__dirname, "..", "data", "accounts.json");
      const rawData = fs.readFileSync(filePath);
      const accounts = JSON.parse(rawData);
      const updatedAccounts = accounts.filter(account => account.title !== title || account.amount !== amount);
  
      if (accounts.length === updatedAccounts.length) {
        return res.status(404).json({ error: "Account not found" });
      }
  
      fs.writeFileSync(filePath, JSON.stringify(updatedAccounts, null, 2));
      console.log(`Account with title: ${title} and amount: ${amount} deleted successfully`);
      res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  