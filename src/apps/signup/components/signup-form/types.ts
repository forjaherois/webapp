export type FormDataType = {
    email: string;
    nickname: string;
    password: string;
};

export type FormStatusType = {
    email: 'default' | 'error';
    nickname: 'default' | 'error';
    password: 'default' | 'error';
};
