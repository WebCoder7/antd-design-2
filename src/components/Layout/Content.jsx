import React, { useState, useEffect } from "react";
import { Button, message } from "antd";
import DataTable from "../Table/DataTable";
import AddDataModal from "../Table/AddDataModal";
import { fetchUsers, createUser } from "../../api/apiService";

const Content = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            try {
                const users = await fetchUsers();
                setData(users);
            } catch (error) {
                message.error("Malumotlarni yuklashda xatolik yuz beridi");
            } finally {
                setLoading(false);
            }
        };
        loadUsers();
    }, []);

    const handleAddUser = async (values) => {
        try {
            const newUser = await createUser(values);
            setData([...data, { ...newUser, id: data.length + 1 }]);
            message.success("Malumot muvaffaqiyatli qoshildi");
        } catch (error) {
            message.error("Malumot qo'shishda xatolik yuz berdi");
        } finally {
            setIsModalVisible(false);
        }
    };

    return (
        <div style={{ padding: "20px", background: "#fff" }}>
            <Button type="primary" onClick={() => setIsModalVisible(true)} style={{ marginBottom: "20px" }}>
                Yangi Ma'lumot Qo'shish
            </Button>
            <DataTable data={data} loading={loading} />
            <AddDataModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onAdd={handleAddUser}
            />
        </div>
    );
};

export default Content;
