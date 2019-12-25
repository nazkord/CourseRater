export enum ClassForm {
    LECTION,
    EXERCISE,
    LAB,
    PROJECT
}

export interface RatingValues {
    rating: 1 | 2 | 3 | 4 | 5;
    // studentId: string;
}

export interface Course {
    id: number;
    courseName: string;
    ects: number;
    semester: number;
    courseForm: ClassForm;
    maxNumberOfStudent: number;
    rate: RatingValues[];
    logoPath: string;
    description: string;
}