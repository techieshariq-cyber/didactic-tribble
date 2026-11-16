// PLACEHOLDER DATA for Phase 1 only. Phase 2+ replaces this with Supabase queries; every dashboard figure must come from real transactions.
export const sample = {
  salesToday: 48250, salesTotal: 1284300, purchases: 742100, outstanding: 186400, received: 1097900, payable: 92300,
  cash: 38200, bank: 264750, customers: 42, suppliers: 11, lowStock: 6,
  recent: [
    { id: 'INV-0148', party: 'Sri Lakshmi Traders', type: 'Tax Invoice', amount: 18450, status: 'Paid' },
    { id: 'INV-0147', party: 'Ravi Kirana Store', type: 'Tax Invoice', amount: 9200, status: 'Due' },
    { id: 'PIN-0031', party: 'Madina Agencies', type: 'Payment In', amount: 12000, status: 'Received' },
    { id: 'PUR-0022', party: 'National Wholesale Co.', type: 'Purchase Bill', amount: 40100, status: 'Payable' },
  ],
}
