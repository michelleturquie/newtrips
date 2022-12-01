import {shape, string, number} from 'prop-types';

export const trips = shape({
    id: number.isRequired,
    img: string,
    title: string,
    description: string,
});