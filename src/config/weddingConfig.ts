export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: 'Couple' | 'Engagement' | 'Family' | 'Pre-Wedding' | 'Wedding Moments';
  alt: string;
}

export interface WeddingConfig {
  bride: {
    name: string;
    fullName: string;
    qualification: string;
    father: string;
    mother: string;
    place: string;
    taluk: string;
    districtInfo: string;
    image: string;
  };
  groom: {
    name: string;
    fullName: string;
    qualification: string;
    father: string;
    mother: string;
    place: string;
    taluk: string;
    districtInfo: string;
    image: string;
  };
  blessings: {
    deities: string;
    deitiesKannada: string;
    invocationSanskrit: string;
    invocationKannada: string;
    eldersHeader: string;
    invitationSubtitle: string;
  };
  engagement: {
    dayOfWeek: string;
    dateFormatted: string;
    timeFormatted: string;
    isoDate: string; // 2026-08-25T18:30:00+05:30
  };
  wedding: {
    dayOfWeek: string;
    dateFormatted: string;
    timeFormatted: string;
    muhurthamRange: string;
    targetIsoDateIST: string; // 2026-08-26T04:50:00+05:30
  };
  venue: {
    name: string;
    landmark: string;
    busStand: string;
    taluk: string;
    fullAddress: string;
    googleMapsSearchUrl: string;
    image: string;
  };
  heroPosition: string; // e.g. "center center", "center 30%", "center 40%"
  origins: {
    masarapadi: string;
    bhairapura: string;
  };
  contacts: Array<{
    label: string;
    number: string;
    display: string;
  }>;
  images: {
    hero: string;
    bride: string;
    groom: string;
    venue: string;
    socialPreview: string;
    ganeshaEmblem: string;
  };
  galleryImages: GalleryImage[];
  music: {
    file: string;
    title: string;
  };
  whatsAppShare: {
    message: string;
  };
  calendar: {
    weddingTitle: string;
    weddingDetails: string;
    engagementTitle: string;
    engagementDetails: string;
  };
}

export const weddingConfig: WeddingConfig = {
  bride: {
    name: 'NIKITHA H.',
    fullName: 'Nikitha H.',
    qualification: 'B.Com',
    mother: 'Smt. Aluvelamma',
    father: 'Sri Hanumappa M.H',
    place: 'Masarapadi',
    taluk: 'Kodigenahalli Hobli, Madhugiri Taluk',
    districtInfo: 'Masarapadi, Kodigenahalli Hobli, Madhugiri Taluk',
    image: '/images/bride.jpg',
  },
  groom: {
    name: 'MANORANJAN B.V.',
    fullName: 'Manoranjan B.V.',
    qualification: 'Diploma',
    mother: 'Smt. Bhagya K.V',
    father: 'Late Sri Venkataraju S',
    place: 'Bhairapura',
    taluk: 'Sasalu, Doddaballapura Taluk',
    districtInfo: 'Bhairapura, Sasalu, Doddaballapura Taluk',
    image: '/images/groom.jpg',
  },
  blessings: {
    deities: 'Sri Masarapadi Anjaneya Swamy & Sri Kavalamma Devi',
    deitiesKannada: 'ಶ್ರೀ ಮಸಾರಪಾಡಿ ಆಂಜನೇಯ ಸ್ವಾಮಿ ಹಾಗೂ ಶ್ರೀ ಕಾವಲಮ್ಮ ದೇವಿ',
    invocationSanskrit: '॥ शुभ मंगल ॥',
    invocationKannada: '॥ ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ ॥',
    eldersHeader: 'WITH THE BLESSINGS OF OUR ELDERS',
    invitationSubtitle: 'Two hearts. One beautiful beginning.',
  },
  engagement: {
    dayOfWeek: 'Tuesday',
    dateFormatted: '25 August 2026',
    timeFormatted: '6:30 PM onwards',
    isoDate: '2026-08-25T18:30:00+05:30',
  },
  wedding: {
    dayOfWeek: 'Wednesday',
    dateFormatted: '26 August 2026',
    timeFormatted: '4:50 AM – 5:30 AM',
    muhurthamRange: '4:50 AM to 5:30 AM IST',
    targetIsoDateIST: '2026-08-26T04:50:00+05:30',
  },
  venue: {
    name: 'Sri Ramanjaneya Kalyana Mantapa',
    landmark: 'Near Sri Neladanjaneya Temple',
    busStand: 'Halli Bus Stand',
    taluk: 'Doddaballapura Taluk',
    fullAddress: 'Sri Ramanjaneya Kalyana Mantapa, Near Sri Neladanjaneya Temple, Halli Bus Stand, Doddaballapura Taluk',
    googleMapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Sri+Ramanjaneya+Kalyana+Mantapa+Near+Sri+Neladanjaneya+Temple+Halli+Bus+Stand+Doddaballapura',
    image: '/images/venue.jpg',
  },
  heroPosition: 'center center', // Change to "center 30%" or "center 40%" as needed for ideal face framing
  origins: {
    masarapadi: 'Masarapadi, Kodigenahalli Hobli, Madhugiri Taluk',
    bhairapura: 'Bhairapura, Sasalu, Doddaballapura Taluk',
  },
  contacts: [
    { label: 'Primary Contact 1', number: '9164707398', display: '+91 91647 07398' },
    { label: 'Primary Contact 2', number: '8080007398', display: '+91 80800 07398' },
    { label: 'Family Contact 3', number: '9108404540', display: '+91 91084 04540' },
  ],
  images: {
    hero: '/images/hero.jpg',
    bride: '/images/bride.jpg',
    groom: '/images/groom.jpg',
    venue: '/images/venue.jpg',
    socialPreview: '/images/social-preview.jpg',
    ganeshaEmblem: '/images/ganesha-gold.png',
  },
  galleryImages: [
    {
      id: 'img-1',
      src: '/images/couple-1.jpg',
      title: 'Together in Harmony',
      category: 'Couple',
      alt: 'Nikitha and Manoranjan Pre-wedding Portrait',
    },
    {
      id: 'img-2',
      src: '/images/engagement-1.jpg',
      title: 'Engagement Celebrations',
      category: 'Engagement',
      alt: 'Engagement Ring Ceremony Moments',
    },
    {
      id: 'img-3',
      src: '/images/family-1.jpg',
      title: 'Family Blessings',
      category: 'Family',
      alt: 'Family gathering and blessings',
    },
    {
      id: 'img-4',
      src: '/images/couple-2.jpg',
      title: 'Eternal Promises',
      category: 'Couple',
      alt: 'Couple traditional photoshoot',
    },
    {
      id: 'img-5',
      src: '/images/wedding-1.jpg',
      title: 'Sacred Rituals',
      category: 'Wedding Moments',
      alt: 'Traditional Wedding Muhurtham Rituals',
    },
    {
      id: 'img-6',
      src: '/images/family-2.jpg',
      title: 'Cherished Memories',
      category: 'Family',
      alt: 'Generations together',
    },
  ],
  music: {
    file: '/music/wedding-music.mp3',
    title: 'Divine Wedding Background Music',
  },
  whatsAppShare: {
    message: `You're warmly invited to celebrate the wedding of Nikitha & Manoranjan ❤️\n\nEngagement: 25 August 2026\nWedding: 26 August 2026\n\nSri Ramanjaneya Kalyana Mantapa,\nDoddaballapura Taluk.\n\nWe would love to celebrate this beautiful occasion with you.`,
  },
  calendar: {
    weddingTitle: 'Wedding Muhurtham: Nikitha H. & Manoranjan B.V.',
    weddingDetails: 'Join us for the auspicious Wedding Muhurtham (4:50 AM - 5:30 AM IST) of Nikitha & Manoranjan at Sri Ramanjaneya Kalyana Mantapa, Doddaballapura.',
    engagementTitle: 'Engagement Ceremony: Nikitha H. & Manoranjan B.V.',
    engagementDetails: 'Join us for the joyous Engagement Ceremony (6:30 PM onwards) of Nikitha & Manoranjan at Sri Ramanjaneya Kalyana Mantapa, Doddaballapura.',
  },
};
