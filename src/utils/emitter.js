import EventEmiiter from 'events';

const _emiiter = new EventEmiiter();
_emiiter.setMaxListeners(0); // unlimit listener

export const emitter = _emiiter;