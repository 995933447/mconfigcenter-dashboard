package util

import (
	"crypto/md5"
	"encoding/hex"
)

func EqualUserPassword(password, passwordHash string) (bool, error) {
	h, err := HashUserPassword(password)
	if err != nil {
		return false, err
	}
	return h == passwordHash, nil
}

func HashUserPassword(password string) (string, error) {
	hasher := md5.New()
	_, err := hasher.Write([]byte(password))
	if err != nil {
		return "", err
	}
	return hex.EncodeToString(hasher.Sum(nil)), nil
}
