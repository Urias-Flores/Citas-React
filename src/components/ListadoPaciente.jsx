import { useEffect } from "react";
import Paciente from "./Paciente.jsx";
import paciente from "./Paciente.jsx";

const ListadoPaciente = ({ Pacientes, setPaciente, deletePaciente }) => {

    return (
        <div className="md:w-3/5 lg:3/5">
            {Pacientes && Pacientes.length ?
                (
                    <>
                        <h2 className="font-black text-center text-3xl">Listado de pacientes</h2>
                        <p className="text-xl text-center mt-5 mb-3 font-bold">Administra tus {''}
                            <span className="text-indigo-600 font-black">pacientes y citas</span>
                        </p>

                        <div className="md:h-screen md:overflow-y-scroll">
                            { Pacientes.map( paciente => (
                                <Paciente
                                    key = {paciente.ID}
                                    Pacientes = {paciente}
                                    setPaciente = {setPaciente}
                                    deletePaciente = {deletePaciente}
                                />
                            ))}
                        </div>
                    </>
                ) :
                (
                    <>
                        <h2 className="font-black text-center text-3xl">No hay paciente</h2>
                        <p className="text-xl text-center mt-5 mb-3 font-bold">Comienza ahora {''}
                            <span className="text-indigo-600 font-black">agregando pacientes</span>
                        </p>
                    </>
                )
            }
        </div>
    )
}

export default ListadoPaciente