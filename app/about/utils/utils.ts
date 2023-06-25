import axios from 'axios';

const getModelFields = (model?: any) => [
    {
        name: 'model',
        fieldType: 'select',
        options: [
            'About',
            'Experience',
            'Education',
            'Achievements',
            'Skills',
            'Hobbies',
        ],
        defaultValue: model?.model || '',
    },
    {
        name: 'title',
        fieldType: 'input',
        type: 'text',
        defaultValue: model?.title || '',
    },
    {
        name: 'description',
        fieldType: 'input',
        type: 'text',
        defaultValue: model?.description || '',
    },
];

const prepareData = (model: string, formData: FormData) => {
    const data: any = {
        title: formData.get('title') as string,
    };

    if (
        model === 'about' ||
        model === 'experience' ||
        model === 'education' ||
        model === 'achievements'
    ) {
        data.description = formData.get('description') as string;
    }

    return data;
};

const createModel = async (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const model = formData.get('model') as string;

    const body = {
        model: model,
        data: prepareData(model, formData),
    };

    const response = await axios.post('/api/about', body);

    if (response.status === 200) {
        console.log('Project created successfully!');
    } else {
        console.error('Failed to create project', response);
    }
};

const updateModel = async (
    event: React.FormEvent<HTMLFormElement>,
    modelId: string
) => {
    try {
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const model = formData.get('model') as string;

        const body = {
            id: modelId,
            model: model,
            data: prepareData(model, formData),
        };

        const response = await axios.put(`/api/about/${modelId}`, body);

        if (response.status === 200) {
            console.log('Model updated successfully!');
        } else {
            console.error('Failed to update model', response);
        }
    } catch (error) {
        console.error('Unexpected error when updating model', error);
    }
};

export { createModel, updateModel, getModelFields };
