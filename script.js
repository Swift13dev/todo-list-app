$(document).ready(function() {

    // ADD TASK (Button click + Enter key)
    $("#addTaskBtn").click(addTask);
    $("#taskInput").keypress(function(e) {
        if (e.which === 13) addTask();
    });

    function addTask() {
        let taskText = $("#taskInput").val().trim();

        if (taskText !== "") {
            // Create new list item
            let newTask = $("<li></li>").text(taskText);

            // Add delete button
            let deleteBtn = $("<span class='deleteBtn'>×</span>");
            newTask.append(deleteBtn);

            // Animation while adding
            newTask.hide().fadeIn("slow");

            // Append to task list
            $("#taskList").append(newTask);

            // Clear input
            $("#taskInput").val("");
        }
    }

    // MARK COMPLETE
    $("#taskList").on("click", "li", function() {
        $(this).toggleClass("completed");
    });

    // DELETE TASK
    $("#taskList").on("click", ".deleteBtn", function(e) {
        e.stopPropagation();
        $(this).parent().slideUp("fast", function() {
            $(this).remove();
        });
    });

    // HOVER EFFECT
    $("#taskList").on("mouseenter", "li", function() {
        $(this).css("background", "#bbdefb");
    }).on("mouseleave", "li", function() {
        if ($(this).hasClass("completed")) {
            $(this).css("background", "#c8e6c9");
        } else {
            $(this).css("background", "#e3f2fd");
        }
    });

    // FILTER BUTTONS
    $(".filterBtn").click(function() {
        let filter = $(this).data("filter");

        if (filter === "all") {
            $("#taskList li").fadeIn();
        } 
        else if (filter === "completed") {
            $("#taskList li").hide().filter(".completed").fadeIn();
        } 
        else if (filter === "pending") {
            $("#taskList li").hide().not(".completed").fadeIn();
        }
    });

});
