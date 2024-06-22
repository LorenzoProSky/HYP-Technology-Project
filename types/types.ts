
export interface Person {
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
    service_id: string;
    service_name: string;
}

export interface Project {
    project_id: string;
    project_name: string;
}