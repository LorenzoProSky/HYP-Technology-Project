
export interface Person {
    person_id: number;
    name: string;
    surname: string;
    job_title: string;
    description: string;
    profile_image_url: string;
    cv_url: string; 
    email: string; 
    role_description: string; 
    project?: string[]; 
    responsible_service?: string[]; 
    offering_service?: string[];
}

export interface Service {
    service_name: string;
    description: string;
    additional_info: string;
    image: Image[];
    manager: Person;
    testimonial: Testimonial[];
    offering_person: Person[];
    offers: Offer[];
}

export interface Offer{
    person_id: number;
    location_id: number;
    service_id: string;
    schedule: string;
}

export interface Testimonial{
    name: string;
    description: string;
}

export interface Project {
    project_id: string;
    project_name: string;
}

export interface Image{
    image_url: string;
}