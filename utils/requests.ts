export const Post = async (endpoint: string, data: any, token?: any): Promise<any> => {
    try {
        let result = await fetch(`http://api.godheranca.com${endpoint}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: data
        })

        return result.json();
    } catch (error) {
        throw error;
        return;
    }
}

export const Get = async (endpoint: string, data: any, token?: any): Promise<any> => {
    try {
        let result = await fetch(`http://api.godheranca.com${endpoint}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: data
        })

        return result.json();
    } catch (error) {
        throw error;
        return;
    }
}
