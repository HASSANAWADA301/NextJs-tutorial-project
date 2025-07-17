"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/store/hooks";
import { fetchFooter } from "../../../src/store/slices/footerSlice";
import FooterClient from "./FooterClient";

const Footer = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.footer);

  useEffect(() => {
    dispatch(fetchFooter());
  }, [dispatch]);

  if (loading) return <div>Loading Footer...</div>;
  if (error) return <div>Error loading footer: {error}</div>;
  if (!data) return null;

  return <FooterClient data={data} />;
};

export default Footer;
