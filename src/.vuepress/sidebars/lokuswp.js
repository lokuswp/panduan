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
        'pembayaran/cash',
        {
        title: 'Integrasi',
        collapsable: false,
        sidebarDepth: -1,
        children: [
            'pembayaran/integrasi/xendit',
            'pembayaran/integrasi/midtrans',
            'pembayaran/integrasi/moota',
            'pembayaran/integrasi/ipaymu',
        ]
        },

      ]
    },
    {
      title: 'Notifikasi',
      collapsable: false,
      sidebarDepth: -1,
      children: [
        'notifikasi/',
        'notifikasi/email',
        {
        title: 'Integrasi',
        collapsable: false,
        sidebarDepth: -1,
        children: [
            'notifikasi/integrasi/dripsender',
            'notifikasi/integrasi/onesender',
        ]
        },

      ]
    },
  ];