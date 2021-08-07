import React, { useState } from "react"
import TeamCard from "../components/TeamCard"
import "../styles/team.css"
import firebase from "../firebase"
import { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, { Navigation } from "swiper/core"
SwiperCore.use([Navigation])

const COLORS = ["#FFD65F", "#FF4D4D", "#109D58", "#4286F5"]
export default function TeamCardContainer() {
  const [members, setMembers] = useState([])
  useEffect(() => {
    const fetchMembers = async () => {
      const db = firebase.firestore()
      const data = await db.collection("members").get()
      const members = data.docs.map((doc) => doc.data())
      setMembers(members)
    }
    fetchMembers()
  }, [])

  return (
    <>
      <Swiper slidesPerView={4} spaceBetween={30} navigation={true} className="card-container">
        {members.map((member, index) => {
          return (
            <SwiperSlide>
              <TeamCard key={index} member={member} color={COLORS[index % COLORS.length]} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
