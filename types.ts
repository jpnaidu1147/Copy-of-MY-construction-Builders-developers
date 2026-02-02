
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Commercial' | 'Residential' | 'Industrial';
  image: string;
  description: string;
  status: 'Completed' | 'Ongoing';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface PackageItem {
  id: string;
  name: string;
  price: string;
  description: string;
  inclusions: string[];
  idealFor: string;
  accent: string;
}
