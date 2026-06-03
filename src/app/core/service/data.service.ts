import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data = [
    {
      animalExperiences: {
        header: {
          label: 'Animal Encounters',
          title: 'Travel With Nature & Wildlife',
          description:
            'Explore wildlife experiences designed for comfort, safety, and accessibility for animal lovers.',
          ctaText: 'Discover More',
          ctaLink: '/animal',
        },
        items: [
          {
            id: 1,
            title: 'Safari with Gentle Giants',
            image: '/assets/images/safari.jpg',
            description:
              'Experience wildlife safaris designed for animal lovers with comfort and accessibility.',
            location: 'Kenya',
            link: '/animal/safari-with-gentle-giants',
          },
          {
            id: 2,
            title: 'Pet-Friendly Europe Tours',
            image: '/assets/images/pets.jpg',
            description:
              'Travel across Europe with your pets in specially designed friendly routes.',
            location: 'Europe',
            link: '/animal/pet-friendly-europe',
          },
        ],
      },

      familyTravel: {
        header: {
          label: 'Family Travel',
          title: 'Journeys For Every Generation',
          description: 'Trips designed for families to enjoy together across all ages and needs.',
          ctaText: 'Explore Family Trips',
          ctaLink: '/family',
        },
        items: [
          {
            id: 1,
            title: 'Multi-Generation Adventures',
            image: '/assets/images/family1.jpg',
            description:
              'Trips designed for grandparents, parents, and kids to enjoy together comfortably.',
            location: 'Worldwide',
            link: '/family/multi-generation-adventures',
          },
          {
            id: 2,
            title: 'Kid-Friendly Cultural Tours',
            image: '/assets/images/family2.jpg',
            description: 'Cultural experiences tailored for families with children and seniors.',
            location: 'Europe',
            link: '/family/kid-friendly-cultural-tours',
          },
        ],
      },

      cruises: {
        header: {
          label: 'Cruises',
          title: 'Slow Travel, Deep Experience',
          description:
            'Luxury and accessible cruise journeys across the world’s most beautiful waters.',
          ctaText: 'View Cruises',
          ctaLink: '/cruises',
        },
        items: [
          {
            id: 1,
            title: 'Mediterranean Luxury Cruise',
            image: '/assets/images/med.png',
            description: 'Relaxing cruise experience across the Mediterranean sea.',
            duration: '10 Days',
            link: '/cruises/mediterranean',
          },
          {
            id: 2,
            title: 'Nile River Journey',
            image: '/assets/images/nile.jpg',
            description: 'Explore Egypt through a calm and accessible Nile cruise.',
            duration: '5 Days',
            link: '/cruises/nile',
          },
        ],
      },

      gearAndSport: {
        header: {
          label: 'Gear & Sport',
          title: 'Travel Smart, Move Freely',
          description: 'Essential gear and adaptive sports equipment for comfortable travel.',
          ctaText: 'Explore Gear',
          ctaLink: '/gear',
        },
        items: [
          {
            id: 1,
            category: 'Travel Gear',
            title: 'Lightweight Mobility Gear',
            image: '/assets/images/mobility.jpg',
            description: 'Smart mobility equipment designed for long trips.',
            link: '/gear/mobility',
          },
          {
            id: 2,
            category: 'Outdoor Sport',
            title: 'Adaptive Hiking Equipment',
            image: '/assets/images/hiking.jpg',
            description: 'Gear that makes hiking safe and accessible for everyone.',
            link: '/gear/hiking',
          },
        ],
      },

      luxuryExperiences: {
        header: {
          label: 'Transport',
          title: 'Accessible Ways To Move',
          description:
            'Air, rail, and local transport options designed for comfort and accessibility.',
          ctaText: 'View Transport',
          ctaLink: '/transport',
        },
        items: [
          {
            id: 1,
            type: 'Air Travel',
            title: 'Accessible Flights Guide',
            image: '/assets/images/air.jpg',
            description: 'Airlines that support mobility needs and senior travelers.',
            link: '/transport/air',
          },
          {
            id: 2,
            type: 'Rail Travel',
            title: 'Comfortable Train Journeys',
            image: '/assets/images/metro.jpg',
            description: 'Rail systems with accessibility options for smooth travel.',
            link: '/transport/rail',
          },
        ],
      },
    },
  ];
}
