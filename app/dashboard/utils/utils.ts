import axios from 'axios';

export const updateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const body = {
        name: formData.get('name'),
        bio: formData.get('bio'),
        age: formData.get('age'),
        image: formData.get('image'),
    };

    try {
        const response = await axios.put('/api/users', body);

        if (response.status >= 200 && response.status < 300) {
        } else {
            alert(`Error: ${response.status}`);
        }
    } catch (error) {
        alert(`Network error: ${error}`);
    }
};
