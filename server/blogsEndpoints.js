const blogsAPI = {
    findById: (blogId) => {
        return blogsTable.find(blog => blog.id === blogId);
    },
    findByTitle: (title, tagId, limit = 10, offset = 0, sort = "ASC") => {
        // Filter blogs by tagId and title.
        let filteredBlogs = blogsTable.filter(blog => {
            if (tagId && tagId !== 0) {
                return blog.tags.includes(tagId) && blog.title.toLowerCase().includes(title.toLowerCase());
            } else {
                return blog.title.toLowerCase().includes(title.toLowerCase());
            }
        });

        // Sorting based on ASC / DESC.
        if (sort === "ASC") {
            filteredBlogs.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (sort === "DESC") {
            filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        // Return paginated results.
        return filteredBlogs.slice(offset, offset + limit);
    },
    findByTag: (tagId, limit = 10, offset = 0, sort = "ASC") => {
        // Filter blogs by tagId if tagId is not 0.
        let filteredBlogs;
        if (tagId && tagId !== 0) {
            filteredBlogs = blogsTable.filter(blog => blog.tags.includes(tagId));
        } else {
            filteredBlogs = [...blogsTable]; // Return all blogs if tagId is 0 or falsy
        }

        // Sorting based on ASC / DESC.
        if (sort === "ASC") {
            filteredBlogs.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (sort === "DESC") {
            filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        // Return paginated results.
        return filteredBlogs.slice(offset, offset + limit);
    },
    countByTitle: (title, tagId) => {
        // Filter blogs by tagId and title.
        let filteredBlogs = blogsTable.filter(blog => {
            if (tagId && tagId !== 0) {
                return blog.tags.includes(tagId) && blog.title.toLowerCase().includes(title.toLowerCase());
            } else {
                return blog.title.toLowerCase().includes(title.toLowerCase());
            }
        });

        // Return the count.
        return filteredBlogs.length;
    },
};
