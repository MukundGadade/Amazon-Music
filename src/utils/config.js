// const projectId = "f104bi07c490";
// const projectId = "edlpgt620a4c";
// const projectId = "l2uaz7omaxbe";
const projectId = "ihgyfmp0d322";
// const projectId = "3j57dfpblpas";
// const projectId = "kwqof86bacfc";
// const projectId = "axqbfwzbny2b";

export const getProjectIdConfig = () => { return { headers : {projectId} }; };

export const getProjectIdAndContentTypeyConfig = () => { 
    return { 
        headers : {
            'Content-Type': 'application/json',
            projectId
        }
    }; 
};

export const getProjectIdAndContentTypeyConfigForFetch = () => { 
    return {
            'Content-Type': 'application/json',
            projectId
           }; 
};

export const getAuthHeaderConfig = () => { 
    return {
        headers:
        {
            'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`,
            projectId,
        }
    }; 
};