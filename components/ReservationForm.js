
"use client";

import { useState } from "react";
import NiceSelect from "./NiceSelect";

const ReservationForm = () => {
    const [loading, setLoading] = useState(false);
    const [people, setPeople] = useState("1-people");
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);
        setStatus({ type: "", message: "" });

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name")?.trim(),
            people,
            phone: formData.get("number")?.trim(),
            date: formData.get("date"),
        };

        try {
            const response = await fetch("/api/reservation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Unable to submit reservation request."
                );
            }

            setStatus({
                type: "success",
                message: result.message || "Reservation request submitted successfully!",
            });

            form.reset();
            setPeople("1-people");
        } catch (error) {
            console.error("Reservation Submission Error:", error);

            setStatus({
                type: "error",
                message: error.message || "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="booking-contact bg-cover"
            style={{
                backgroundImage: 'url("assets/img/shape/booking-shape.png")',
            }}
        >
            <h4 className="text-center text-white">
                Create a Reservation
            </h4>

            <form onSubmit={handleSubmit}>
                <div className="booking-items">

                    <div className="form-clt">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            disabled={loading}
                        />
                        <div className="icon">
                            <i className="fas fa-user" />
                        </div>
                    </div>

                    <div className="form-clt">
                        <NiceSelect
                            option={[
                                { id: 1, name: "1 Person", value: "1-people" },
                                { id: 2, name: "2 People", value: "2-people" },
                                { id: 3, name: "3 People", value: "3-people" },
                            ]}
                            className="no-of-person"
                            onChange={(selected) => setPeople(selected.value)}
                        />
                    </div>

                    <div className="form-clt">
                        <input
                            type="tel"
                            name="number"
                            id="number"
                            placeholder="Phone Number"
                            required
                            disabled={loading}
                        />
                        <div className="icon">
                            <i className="fas fa-phone" />
                        </div>
                    </div>

                    <div className="form-clt">
                        <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            disabled={loading}
                        />
                    </div>

                    {status.message && (
                        <div className="form-clt">
                            <div
                                className={
                                    status.type === "success"
                                        ? "alert alert-success"
                                        : "alert alert-danger"
                                }
                                role="alert"
                            >
                                {status.message}
                            </div>
                        </div>
                    )}

                    <div className="form-clt">
                        <button
                            type="submit"
                            className="theme-btn bg-yellow"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Book Now"}
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default ReservationForm;
