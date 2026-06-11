export const getProducts = (req: any, res: any) => {
  res.json([
    {
      id: 1,
      name: "iPhone 15",
      price: 999
    }
  ]);
};
