import Types from './types'

export const taskAddTask = (payload)=> (
{
    type: Types.ADD_TASK,
    payload
}
);
