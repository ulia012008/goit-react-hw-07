import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.container}>
      {loading && <p>Loading...</p>}
      {error && <p className={css.error}>Error: {error}</p>}
      <ul className={css.list}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id} className={css.item}>
            <p>
              {name}: {phone}
            </p>
            <button
              onClick={() => dispatch(deleteContact(id))}
              className={css.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {!loading && contacts.length === 0 && <p>No contacts found.</p>}
    </div>
  );
};

export default ContactList;
