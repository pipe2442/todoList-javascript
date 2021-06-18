const newTask = (() => {
    function Task(name, description, dueDate, priority) {
        this.title = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

})();

export default newTask