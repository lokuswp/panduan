module.exports = [
    {
      title: 'Memulai',
      collapsable: false,
      sidebarDepth: -1,
      children: [
        '',
        'instalasi',
      ]
    },
    {
      title: 'Pembayaran',
      collapsable: false,
      sidebarDepth: -1,
      children: [
        'pembayaran/',
        'pembayaran/custom-bank-transfer',
        'pembayaran/bank-bca',
        {
        title: 'Integrasi',
        collapsable: false,
        sidebarDepth: -1,
        children: [
            'pembayaran/integrasi/xendit',
        ]
        },

      ]
    },
  ];