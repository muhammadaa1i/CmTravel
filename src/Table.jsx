import React from 'react'

const Table = () => {
    return (
        <div className="table container py-5 m-auto max-md:hidden">

            <div className="jadval m-auto max-w-7xl px-3 mx-auto">

                <h1 className="md:text-[30px] leading-10 text-[25px] text-black text-center font-semibold">Xizmatlar va narxlar</h1>
                <p className="md:text-[17px] leading-[30px] text-[15px] text-[#666] text-center">O'zingizga ma'qul tarifni tanlang</p>

                <div className="table-pr lg:w-[85%] max-lg:w-[100%] m-auto py-5 flex justify-center">

                    <table className="w-full border-collapse max-md:w-[75%]">
                        <thead>
                            <tr>
                                <th className="p-5 w-[25%] text-left font-bold border border-solid border-[#ddd] max-md:w-[15%]">Xususiyatlar</th>
                                <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd] max-md:w-[15%]">Kundalik</th>
                                <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd] max-md:w-[15%]">Oylik</th>
                                <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd] max-md:w-[15%]">Yillik</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%] max-md:w-[15%]">10-soatlik trening</td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <i className="fa-solid fa-circle-check text-green-600"></i>
                                </td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <i className="fa-solid fa-circle-check text-green-600"></i>
                                </td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <i className="fa-solid fa-circle-check text-green-600"></i>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%] max-md:w-[15%]">Kofe va tushlik</td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]"></td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]"></td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <i className="fa-solid fa-circle-check text-green-600"></i>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%] max-md:w-[15%]">Kurs fayllari PDF formatida email orqali yuboriladi</td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <i className="fa-solid fa-circle-check text-green-600"></i>
                                </td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <i className="fa-solid fa-circle-check text-green-600"></i>
                                </td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <i className="fa-solid fa-circle-check text-green-600"></i>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%] max-md:w-[15%]">Individual konsultatsiya</td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <i className="fa-solid fa-circle-xmark text-red-600"></i>
                                </td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <i className="fa-solid fa-circle-check text-green-600"></i>
                                </td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <i className="fa-solid fa-circle-check text-green-600"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="border border-solid border-[#ddd] p-5 text-left w-[25%] max-md:w-[15%]">Sertifikat</td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <i className="fa-solid fa-circle-xmark text-red-600"></i>
                                </td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <i className="fa-solid fa-circle-xmark text-red-600"></i>
                                </td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <i className="fa-solid fa-circle-check text-green-600"></i>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]"></td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <a className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white" href="#contact">
                                        <button className="py-[15px] px-10 text-[17px]">Ko'proq</button>
                                    </a>
                                </td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <a className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white" href="#contact">
                                        <button className="py-[15px] px-10 text-[17px]">Ko'proq</button>
                                    </a>
                                </td>
                                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                                    <a className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white" href="#contact">
                                        <button className="py-[15px] px-10 text-[17px]">Ko'proq</button>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
            
        </div >
    )
}

export default Table