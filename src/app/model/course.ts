export enum ClassForm {
    LECTION,
    EXERCISE,
    LAB,
    PROJECT
}

export interface Course {
    id: number;
    courseName: string;
    ects: number;
    semester: number;
    courseForm: ClassForm;
    maxNumberOfStudent: number;
    rate: number;
    logoPath: string;
    description: string;
}