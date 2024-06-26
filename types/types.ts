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
    service_id: number;
    service_name: string;
    short_description: string;
    image: Image[];
}

export interface Sponsor {
    sponsor_name: string;
    logo_url: string;
}

export interface Manager {
    name: string;
    surname: string;
}

export interface Image {
    image_url: string;
}

export interface Project {
    project_id: string;
    project_name: string;
    description: string;
    short_description: string;
    location_info: string;
    date_info: string;
    status?: boolean;
    participants_info?: string;
    additional_info?: string;
    image: Image[];
    sponsor?: Sponsor[];
    person?: Manager;

}