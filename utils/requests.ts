export const Post = async (endpoint: string, data: any, contentType:any, token?: any ): Promise<any> => {
    try {
        let result = await fetch(`https://api.godheranca.com${endpoint}/`, {
            method: 'POST',
            headers: {
                'Content-Type': contentType
            },
            body: data
        })

        return result.json();
    } catch (error) {
        throw error;
    }
}

export const Get = async (endpoint: string, data: any, token?: any): Promise<any> => {
    try {
        let result = await fetch(`https://api.godheranca.com${endpoint}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: data
        })

        return result.json();
    } catch (error) {
        throw error;
    }
}

export const PostAuth = async (endpoint: string, data: any, contentType:any, token?: any ): Promise<any> => {
    try {
        let result = await fetch(`https://api.godheranca.com${endpoint}/`, {
            method: 'POST',
            headers: {
                'Content-Type': contentType,
                'Authorization': `Bearer ${token}`
            },
            body: data
        })

        return result.json();
    } catch (error) {
        throw error;
    }
}
