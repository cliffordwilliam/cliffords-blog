const tagsAPI = {
    findAll: () => {
        return tagsTable;
    },
    findById: (tagId) => {
        return tagsTable.find(tag => tag.id === tagId);
    },
};