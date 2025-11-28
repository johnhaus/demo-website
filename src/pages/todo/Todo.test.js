import { describe, it, expect } from 'vitest';
import { addTaskLogic, togglePriorityLogic, toggleCompletionLogic, deleteTaskLogic } from './todoUtils';

describe('addTaskLogic', () => {
  it('should add a new task when text is not empty', () => {
    const tasks = [];
    const newTask = addTaskLogic(tasks, 1, 'Test Task', true);
    expect(newTask).toEqual([
      { key: 1, text: 'Test Task', completed: false, priority: true },
    ]);
  });

  it('should handle adding multiple tasks with unique keys', () => {
    const tasks = [];
    const task1 = addTaskLogic(tasks, 1, 'First Task', false);
    const task2 = addTaskLogic(task1, 2, 'Second Task', true);
    expect(task2).toEqual([
      { key: 1, text: 'First Task', completed: false, priority: false },
      { key: 2, text: 'Second Task', completed: false, priority: true },
    ]);
  });

  it('should not add a task if the text is empty', () => {
    const tasks = [];
    const newTask = addTaskLogic(tasks, 1, '', true);
    expect(newTask).toEqual([]);
  });

  it('should ignore extra spaces in the text input', () => {
    const tasks = [];
    const newTask = addTaskLogic(tasks, 1, '   ', false);
    expect(newTask).toEqual([]);
  });

  it('should add task with default "completed" as false', () => {
    const tasks = [];
    const newTask = addTaskLogic(tasks, 1, 'Another Task', false);
    expect(newTask[0].completed).toBe(false);
  });
});

describe('togglePriorityLogic', () => {
  it('should toggle the priority of the task with the given id', () => {
    const tasks = [
      { key: 1, text: 'Test Task', completed: false, priority: false },
      { key: 2, text: 'Another Task', completed: false, priority: true },
    ];
    const updatedTasks = togglePriorityLogic(tasks, 1);
    expect(updatedTasks[0].priority).toBe(true);
    expect(updatedTasks[1].priority).toBe(true);
  });

  it('should not affect other tasks', () => {
    const tasks = [
      { key: 1, text: 'Test Task', completed: false, priority: false },
      { key: 2, text: 'Another Task', completed: false, priority: false },
    ];
    const updatedTasks = togglePriorityLogic(tasks, 1);
    expect(updatedTasks[0].priority).toBe(true);
    expect(updatedTasks[1].priority).toBe(false);
  });

  it('should toggle priority multiple times', () => {
    const tasks = [
      { key: 1, text: 'Test Task', completed: false, priority: false },
      { key: 2, text: 'Another Task', completed: false, priority: false },
    ];
    let updatedTasks = togglePriorityLogic(tasks, 1);
    updatedTasks = togglePriorityLogic(updatedTasks, 1);
    expect(updatedTasks[0].priority).toBe(false);
    expect(updatedTasks[1].priority).toBe(false);
  });
});

describe('toggleCompletionLogic', () => {
  it('should toggle the completion status of the task with the given id', () => {
    const tasks = [
      { key: 1, text: 'Test Task', completed: false, priority: false },
      { key: 2, text: 'Another Task', completed: true, priority: true },
    ];
    const updatedTasks = toggleCompletionLogic(tasks, 1);
    expect(updatedTasks[0].completed).toBe(true);
    expect(updatedTasks[1].completed).toBe(true);
  });

  it('should not affect other tasks', () => {
    const tasks = [
      { key: 1, text: 'Test Task', completed: false, priority: false },
      { key: 2, text: 'Another Task', completed: false, priority: true },
    ];
    const updatedTasks = toggleCompletionLogic(tasks, 1);
    expect(updatedTasks[0].completed).toBe(true);
    expect(updatedTasks[1].completed).toBe(false);
  });

  it('should toggle completion multiple times', () => {
    const tasks = [
      { key: 1, text: 'Test Task', completed: false, priority: false },
      { key: 2, text: 'Another Task', completed: false, priority: true },
    ];
    let updatedTasks = toggleCompletionLogic(tasks, 1);
    updatedTasks = toggleCompletionLogic(updatedTasks, 1);
    expect(updatedTasks[0].completed).toBe(false);
    expect(updatedTasks[1].completed).toBe(false);
  });

  it('should correctly toggle completion for different combinations of tasks', () => {
    const tasks = [
      { key: 1, text: 'Test Task', completed: false, priority: false },
      { key: 2, text: 'Second Task', completed: true, priority: true },
    ];
    const updatedTasks = toggleCompletionLogic(tasks, 2);
    expect(updatedTasks[1].completed).toBe(false);
  });
});

describe('deleteTaskLogic', () => {
  it('should remove the task with the given id', () => {
    const tasks = [
      { key: 1, text: 'Test Task', completed: false, priority: false },
      { key: 2, text: 'Another Task', completed: false, priority: true },
    ];
    const updatedTasks = deleteTaskLogic(tasks, 1);
    expect(updatedTasks).toEqual([
      { key: 2, text: 'Another Task', completed: false, priority: true },
    ]);
  });

  it('should not remove tasks with other keys', () => {
    const tasks = [
      { key: 1, text: 'Test Task', completed: false, priority: false },
      { key: 2, text: 'Another Task', completed: false, priority: true },
    ];
    const updatedTasks = deleteTaskLogic(tasks, 1);
    expect(updatedTasks.length).toBe(1);
    expect(updatedTasks[0].key).toBe(2);
  });

  it('should return an empty array if all tasks are deleted', () => {
    const tasks = [
      { key: 1, text: 'Test Task', completed: false, priority: false },
      { key: 2, text: 'Another Task', completed: false, priority: true },
    ];
    const updatedTasks = deleteTaskLogic(tasks, 1);
    const finalTasks = deleteTaskLogic(updatedTasks, 2);
    expect(finalTasks).toEqual([]);
  });

  it('should return the same list if no matching task key is found', () => {
    const tasks = [
      { key: 1, text: 'Test Task', completed: false, priority: false },
      { key: 2, text: 'Another Task', completed: false, priority: true },
    ];
    const updatedTasks = deleteTaskLogic(tasks, 3);
    expect(updatedTasks).toEqual(tasks);
  });

  it('should delete tasks when multiple keys are removed in sequence', () => {
    const tasks = [
      { key: 1, text: 'Test Task', completed: false, priority: false },
      { key: 2, text: 'Second Task', completed: true, priority: true },
      { key: 3, text: 'Third Task', completed: false, priority: false },
    ];
    let updatedTasks = deleteTaskLogic(tasks, 1);
    updatedTasks = deleteTaskLogic(updatedTasks, 3);
    expect(updatedTasks).toEqual([
      { key: 2, text: 'Second Task', completed: true, priority: true },
    ]);
  });
});
