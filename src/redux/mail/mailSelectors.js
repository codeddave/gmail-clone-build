import { createSelector } from "reselect";

const selectMail = (state) => state.mail;

export const selectEmails = createSelector([selectMail], (mail) =>
  mail.email ? mail.email : []
);
