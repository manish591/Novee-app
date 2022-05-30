import { v4 as uuid } from 'uuid';
import bcyrpt from 'bcryptjs';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Manish',
    lastName: 'Devrani',
    email: 'manishdevrani777@gmail.com',
    password: bcyrpt.hashSync('manishdevrani777', 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Rahul',
    lastName: 'Yadav',
    email: 'yadavrahul42@gmail.com',
    password: bcyrpt.hashSync('h41rahulfbcd55', 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Prachi',
    lastName: 'Sharma',
    email: 'prachisharma@gmail.com',
    password: bcyrpt.hashSync('prachi123sharma', 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
