export interface ImageItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: 'Drone' | 'Tank' | 'Aircraft' | 'Naval';
    featured: boolean;
}

export const imageData: ImageItem[] = [
    {
        id: 1,
        title: "Military Surveillance Drone",
        description: "Advanced reconnaissance drone used for intelligence gathering operations.",
        imageUrl: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg",
        category: "Drone",
        featured: true
    },
    {
        id: 2,
        title: "Modern Battle Tank",
        description: "Heavy armor battle tank with advanced targeting systems.",
        imageUrl: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg",
        category: "Tank",
        featured: true
    },
    {
        id: 3,
        title: "Tactical Quadcopter",
        description: "Small tactical drone used for close-range reconnaissance missions.",
        imageUrl: "https://images.pexels.com/photos/2543341/pexels-photo-2543341.jpeg",
        category: "Drone",
        featured: false
    },
    {
        id: 4,
        title: "Urban Combat Tank",
        description: "Medium-weight tank designed for urban warfare and city operations.",
        imageUrl: "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg",
        category: "Tank",
        featured: false
    },
    {
        id: 5,
        title: "Strategic Bomber Aircraft",
        description: "Long-range, high-altitude bomber capable of delivering precision strikes.",
        imageUrl: "https://images.pexels.com/photos/733254/pexels-photo-733254.jpeg",
        category: "Aircraft",
        featured: true
    },
    {
        id: 6,
        title: "Armored Personnel Carrier",
        description: "Tracked armored vehicle designed to transport infantry to the battlefield.",
        imageUrl: "https://images.pexels.com/photos/2543341/pexels-photo-2543341.jpeg",
        category: "Tank",
        featured: false
    },
    {
        id: 7,
        title: "Maritime Patrol Drone",
        description: "Long-endurance drone designed for naval reconnaissance and surveillance.",
        imageUrl: "https://images.pexels.com/photos/733254/pexels-photo-733254.jpeg",
        category: "Drone",
        featured: false
    },
    {
        id: 8,
        title: "Stealth Fighter Jet",
        description: "Advanced tactical fighter with reduced radar cross-section and infrared signature.",
        imageUrl: "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg",
        category: "Aircraft",
        featured: true
    },
    {
        id: 9,
        title: "Light Reconnaissance Tank",
        description: "Fast, agile tank built for reconnaissance and flanking maneuvers.",
        imageUrl: "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg",
        category: "Tank",
        featured: false
    },
    {
        id: 10,
        title: "Naval Destroyer",
        description: "Guided missile destroyer with advanced radar and weapons systems.",
        imageUrl: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg",
        category: "Naval",
        featured: true
    },
    {
        id: 11,
        title: "Attack Helicopter",
        description: "Armed helicopter designed to engage enemy armor, personnel, and fortifications.",
        imageUrl: "https://images.pexels.com/photos/2543341/pexels-photo-2543341.jpeg",
        category: "Aircraft",
        featured: false
    },
    {
        id: 12,
        title: "Tactical Combat Drone",
        description: "Armed unmanned aerial vehicle capable of performing strike missions.",
        imageUrl: "https://images.pexels.com/photos/2100075/pexels-photo-2100075.jpeg",
        category: "Drone",
        featured: false
    }
];