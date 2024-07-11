
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
    project: [{
        project_id: string;
        project_name: string;
    }]; 
    responsible_service: [{
        service_id: string;
        service_name: string;
    }]; 
    offering_service: [{
        service_id: string;
        service_name: string;
    }];
    short_description?: string;
}

export interface ServiceOfferingInfo {
    location: {
        name: string,
    };
    schedule: String;
}

export interface Service {
    service_id: number;
    service_name: string;
    short_description: string;
    image: Image[];
    service_offering_info: ServiceOfferingInfo[];
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

export interface Service {
    service_id: string;
    service_name: string;
    short_description: string;
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