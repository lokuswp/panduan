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
        {
          title: 'Bawaan',
          collapsable: false,
          sidebarDepth: -1,
          children: [
              'pembayaran/bawaan/custom-bank-transfer',
              'pembayaran/bawaan/cash',
              'pembayaran/bawaan/bank-bca',
          ]
        },
        {
        title: 'Integrasi',
        collapsable: true,
        sidebarDepth: -1,
        children: [
            'pembayaran/integrasi/xendit',
            'pembayaran/integrasi/midtrans',
            'pembayaran/integrasi/ipaymu',
            'pembayaran/integrasi/moota',
        ]
        },
      {
          title: 'Pro ( Addon )',
          collapsable: true,
          sidebarDepth: -1,
          children: [
              'pembayaran/pro/static-qris',
              'pembayaran/pro/bank-transfer-generator',
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
      {
          title: 'Bawaan',
          collapsable: false,
          sidebarDepth: -1,
          children: [
              'notifikasi/bawaan/email',
              'notifikasi/bawaan/webhook',
          ]
      },
        {
        title: 'Integrasi',
        collapsable: true,
        sidebarDepth: -1,
        children: [
            'notifikasi/integrasi/onesender',
            'notifikasi/integrasi/dripsender',
            'notifikasi/integrasi/wablas',
            'notifikasi/integrasi/starsender',
            'notifikasi/integrasi/woowaa',
        ]
        },

      ]
    },
    {
        title: 'Kustom',
        collapsable: false,
        sidebarDepth: -1,
        children: [
            'kustomisasi/',
            'kustomisasi/translasi',
            'kustomisasi/custom-fee',
        ]
    },
  ];