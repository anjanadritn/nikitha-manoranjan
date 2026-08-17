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
    isoDate: string;
  };
  wedding: {
    dayOfWeek: string;
    dateFormatted: string;
    timeFormatted: string;
    muhurthamRange: string;
    targetIsoDateIST: string;
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
  heroPosition: string;
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
  galleryImages?: any[]; // removed couple gallery usage; kept optional for compatibility
  music: {
    file: string;
    title: string;
  };
  whatsAppShare: {
    message: string;
    vercelUrl: string;
  };
  calendar: {
    weddingTitle: string;
    weddingDetails: string;
    engagementTitle: string;
    engagementDetails: string;
  };
}

// To add more couple photos, place the image in public/images/gallery/ and add its path to the couple gallery array below.
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
    image: '/images/groom.jpg',
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
    image: '/images/bride.jpeg',
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
  heroPosition: 'center center',
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
    hero: '/images/hero.jpeg',
    bride: '/images/groom.jpg',
    groom: '/images/bride.jpeg',
    venue: '/images/venue.jpg',
    socialPreview: '/images/social-preview.jpg',
    ganeshaEmblem: '/images/ganesha-gold.svg',
  },
  // galleryImages removed — couple gallery is intentionally not used in this build
  music: {
    file: '/audio/wedding-song.mpeg',
    title: 'Wedding Song Background Music',
  },
  whatsAppShare: {
    vercelUrl: 'https://nikitha-manoranjan-xw5j.vercel.app/',
    message: `💍 With the blessings of our elders, we warmly invite you to the wedding celebration of Nikitha H. & Manoranjan B.V. ❤️\n\n📅 25 & 26 August 2026\n\n📍 Sri Ramanjaneya Kalyana Mantapa, Doddaballapura\n\nWe would be delighted to have you with us and bless the couple.\n\n💌 View the complete digital wedding invitation:\nhttps://nikitha-manoranjan-xw5j.vercel.app/`,
  },
  calendar: {
    weddingTitle: 'Wedding Muhurtham: Nikitha H. & Manoranjan B.V.',
    weddingDetails: 'Join us for the auspicious Wedding Muhurtham (4:50 AM - 5:30 AM IST) of Nikitha & Manoranjan at Sri Ramanjaneya Kalyana Mantapa, Doddaballapura.',
    engagementTitle: 'Engagement Ceremony: Nikitha H. & Manoranjan B.V.',
    engagementDetails: 'Join us for the joyous Engagement Ceremony (6:30 PM onwards) of Nikitha & Manoranjan at Sri Ramanjaneya Kalyana Mantapa, Doddaballapura.',
  },
};
