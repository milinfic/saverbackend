exports.getClientID = (req, res) => {
    const clientId = req?.user?.clientId || null;
  
    if (!clientId) return res.send.json({success: false});
  
   return String(clientId).replace(/[^a-zA-Z0-9_]/g, '');
}