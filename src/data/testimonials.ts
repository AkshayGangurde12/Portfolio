export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    role: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Akshay demonstrated exceptional problem-solving skills and delivered high-quality code consistently. His ability to understand complex requirements and translate them into elegant solutions is impressive.',
    author: {
      name: 'Dr. Rajesh Kumar',
      role: 'Professor & Project Guide',
      company: 'VIIT Pune',
      avatar: '/testimonials/placeholder-1.jpg'
    },
    rating: 5
  },
  {
    id: '2',
    quote: 'Working with Akshay on the farmer management platform was a great experience. He showed strong technical skills in MERN stack and excellent teamwork throughout the project.',
    author: {
      name: 'Priya Sharma',
      role: 'Team Lead',
      company: 'College Project',
      avatar: '/testimonials/placeholder-2.jpg'
    },
    rating: 5
  }
];
