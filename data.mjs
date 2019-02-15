const prescriptions = [
  {
    code: '01-15',
    de: {
      title: 'Brandschutznorm',
      link: 'BSPUB-1394520214-57',
    },
    fr: {
      title: 'Norme de protection incendie',
      link: 'BSPUB-1394520214-55',
    },
  },
  {
    code: '10-15',
    de: {
      title: 'Begriffe und Definitionen',
      link: 'BSPUB-1394520214-61',
    },
    fr: {
      title: 'Termes et définitions',
      link: 'BSPUB-1394520214-59',
    },
  },
  {
    code: '11-15',
    de: {
      title: 'Qualitätssicherung im Brandschutz',
      link: 'BSPUB-1394520214-65',
    },
    fr: {
      title: 'Assurance qualité en protection incendie',
      link: 'BSPUB-1394520214-63',
    },
  },
  {
    code: '12-15',
    de: {
      title: 'Brandverhütung und organisatorischer Brandschutz',
      link: 'BSPUB-1394520214-1545',
    },
    fr: {
      title:
        'Prévention des incendies et protection incendie organisationnelle',
      link: 'BSPUB-1394520214-68',
    },
  },
  {
    code: '13-15',
    de: {
      title: 'Baustoffe und Bauteile',
      link: 'BSPUB-1394520214-71',
    },
    fr: {
      title: 'Matériaux et éléments de construction',
      link: 'BSPUB-1394520214-72',
    },
  },
  {
    code: '14-15',
    de: {
      title: 'Verwendung von Baustoffen',
      link: 'BSPUB-1394520214-77',
    },
    fr: {
      title: 'Utilisation des matériaux de construction',
      link: 'BSPUB-1394520214-75',
    },
  },
  {
    code: '15-15',
    de: {
      title: 'Brandschutzabstände Tragwerke Brandabschnitte',
      link: 'BSPUB-1394520214-81',
    },
    fr: {
      title:
        'Distances de sécurité incendie, systèmes porteurs et compartiments coupe-feu',
      link: 'BSPUB-1394520214-79',
    },
  },
  {
    code: '16-15',
    de: {
      title: 'Flucht- und Rettungswege',
      link: 'BSPUB-1394520214-85',
    },
    fr: {
      title: 'Voies d’évacuation et de sauvetage',
      link: 'BSPUB-1394520214-83',
    },
  },
  {
    code: '17-15',
    de: {
      title:
        'Kennzeichnung von Fluchtwegen Sicherheitsbeleuchtung Sicherheitsstromversorgung',
      link: 'BSPUB-1394520214-89',
    },
    fr: {
      title:
        'Signalisation des voies d’évacuation Éclairage de sécurité Alimentation de sécurité',
      link: 'BSPUB-1394520214-87',
    },
  },
  {
    code: '18-15',
    de: {
      title: 'Löscheinrichtungen',
      link: 'BSPUB-1394520214-91',
    },
    fr: {
      title: 'Dispositifs d’extinction',
      link: 'BSPUB-1394520214-92',
    },
  },
  {
    code: '19-15',
    de: {
      title: 'Sprinkleranlagen',
      link: 'BSPUB-1394520214-97',
    },
    fr: {
      title: 'Installations sprinklers',
      link: 'BSPUB-1394520214-95',
    },
  },
  {
    code: '20-15',
    de: {
      title: 'Brandmeldeanlagen',
      link: 'BSPUB-1394520214-101',
    },
    fr: {
      title: 'Installations de détection d’incendie',
      link: 'BSPUB-1394520214-99',
    },
  },
  {
    code: '21-15',
    de: {
      title: 'Rauch- und Wärmeabzugsanlagen',
      link: 'BSPUB-1394520214-105',
    },
    fr: {
      title: "Installations d'extraction de fumée et de chaleur",
      link: 'BSPUB-1394520214-103',
    },
  },
  {
    code: '22-15',
    de: {
      title: 'Blitzschutzsysteme',
      link: 'BSPUB-1394520214-107',
    },
    fr: {
      title: 'Systèmes de protection contre la foudre',
      link: 'BSPUB-1394520214-108',
    },
  },
  {
    code: '23-15',
    de: {
      title: 'Beförderungsanlagen',
      link: 'BSPUB-1394520214-113',
    },
    fr: {
      title: 'Installations de transport',
      link: 'BSPUB-1394520214-111',
    },
  },
  {
    code: '24-15',
    de: {
      title: 'Wärmetechnische Anlagen',
      link: 'BSPUB-1394520214-117',
    },
    fr: {
      title: 'Installations thermiques',
      link: 'BSPUB-1394520214-115',
    },
  },
  {
    code: '25-15',
    de: {
      title: 'Lufttechnische Anlagen',
      link: 'BSPUB-1394520214-121',
    },
    fr: {
      title: 'Installations aérauliques',
      link: 'BSPUB-1394520214-119',
    },
  },
  {
    code: '26-15',
    de: {
      title: 'Gefährliche Stoffe',
      link: 'BSPUB-1394520214-125',
    },
    fr: {
      title: 'Matières dangereuses',
      link: 'BSPUB-1394520214-123',
    },
  },
  {
    code: '27-15',
    de: {
      title: 'Nachweisverfahren im Brandschutz',
      link: 'BSPUB-1394520214-127',
    },
    fr: {
      title: 'Méthodes de preuves en protection incendie',
      link: 'BSPUB-1394520214-128',
    },
  },
  {
    code: '28-15',
    de: {
      title: 'Anerkennungsverfahren',
      link: 'BSPUB-1394520214-133',
    },
    fr: {
      title: 'Procédure de reconnaissance AEAI',
      link: 'BSPUB-1394520214-131',
    },
  },
]

export { prescriptions }
