import React from "react";
import DataTable from "react-data-table-component";
import moment from "moment";

const UsersTable = ({ title, userData }) => {
  moment.locale("pt-br");

  // TODO: If user does not any type of date in database
  // moment set the date to current
  const data = userData.map((user, index) => {
    return {
      id: index,
      name: `${user.user.firstName} ${user.user.lastName}`,
      email: user.user.email,
      age: user.user.age,
      lastTimeInQueue: moment(user.user.lastTimeInQueue).format(
        "DD/MM/YYYY HH:mm:ss"
      ),
      lastTimeCalled: moment(user.user.lastTimeCalled).format(
        "DD/MM/YYYY HH:mm:ss"
      ),
      reviewDate: moment(user.createdAt).format("DD/MM/YYYY HH:mm:ss")
    };
  });

  const columns = [
    { name: "Nome", selector: "name" },
    { name: "Idade", selector: "age" },
    { name: "E-mail", selector: "email" },
    { name: "Data da avaliação", selector: "reviewDate" },
    { name: "Ultima fila", selector: "lastTimeInQueue" },
    { name: "Ultima vez chamado", selector: "lastTimeCalled" }
  ];

  return (
    <DataTable
      title={title}
      data={data}
      columns={columns}
      noDataComponent="Nenhum resultado"
    />
  );
};

export default UsersTable;
